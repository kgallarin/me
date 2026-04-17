<?php

namespace App\GraphQL\Mutations;

use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Validator;

class SendContactEmail
{
    public function __invoke(mixed $_, array $args): array
    {
        $validator = Validator::make($args, [
            'name'    => ['required', 'string', 'min:2', 'max:100'],
            'email'   => ['required', 'email'],
            'message' => ['required', 'string', 'min:10', 'max:2000'],
        ]);

        if ($validator->fails()) {
            return ['success' => false, 'message' => 'Please check your input and try again.'];
        }

        $key = 'contact-email:' . request()->ip();

        if (RateLimiter::tooManyAttempts($key, 3)) {
            return ['success' => false, 'message' => 'Too many requests. Please try again later.'];
        }

        RateLimiter::hit($key, 3600);

        try {
            Mail::raw(
                "Name: {$args['name']}\nEmail: {$args['email']}\n\nMessage:\n{$args['message']}",
                function ($mail) use ($args) {
                    $mail->to(env('CONTACT_EMAIL'))
                         ->subject("Portfolio Contact: {$args['name']}")
                         ->replyTo($args['email'], $args['name']);
                }
            );
        } catch (\Throwable $e) {
            \Log::error('SendContactEmail failed: ' . $e->getMessage());
            return ['success' => false, 'message' => 'Failed to send message. Please try again later.'];
        }

        return ['success' => true, 'message' => 'Message sent! I will get back to you soon.'];
    }
}
