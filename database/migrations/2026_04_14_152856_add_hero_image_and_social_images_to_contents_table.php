<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('contents', static function (Blueprint $table) {
          $table->json('hero_image')->nullable();
					$table->json('social_images')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('contents', static function (Blueprint $table) {
            $table->dropColumn('hero_image');
            $table->dropColumn('social_images');
        });
    }
};
