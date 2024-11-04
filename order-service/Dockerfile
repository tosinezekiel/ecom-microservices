FROM php:8.2-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    libzip-dev \
    librabbitmq-dev

# Install PHP extensions
RUN docker-php-ext-install \
    pdo_mysql \
    mbstring \
    exif \
    pcntl \
    bcmath \
    opcache \
    zip \
    sockets  # Added sockets extension

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www/html

# Set Composer to run as root/superuser
ENV COMPOSER_ALLOW_SUPERUSER=1

# Copy composer files
COPY composer.json composer.lock symfony.lock ./

# Install project dependencies
RUN composer install --prefer-dist --no-scripts --no-dev --no-autoloader

# Copy all project files
COPY . .

# Generate autoload files
RUN composer dump-autoload --no-scripts --no-dev --optimize

# Set directory permissions
RUN chmod -R 777 var
RUN chown -R www-data:www-data var

EXPOSE 9000

CMD ["php-fpm"]