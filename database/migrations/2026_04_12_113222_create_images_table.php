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
        Schema::create('images', function (Blueprint $table) {
						$table->uuid('id')->primary();
						$table->uuidMorphs('imageable');
						$table->string('type')->default('gallery'); // single | gallery
						$table->string('title');
						$table->string('collection_name');
						$table->string('path');
						$table->string('alt');
						$table->text('description');
						$table->string('mime_type');
						$table->unsignedBigInteger('size');
						$table->json('responsive_images');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('images');
    }
};
