#!/bin/bash
# One-time server setup for kgdev on Ubuntu 22.04 LTS (Lightsail)
# Run as: sudo bash server-setup.sh

set -e

APP_DIR="/var/www/kgdev"
PHP_VERSION="8.2"
NODE_VERSION="20"

echo "==> Updating system packages"
apt-get update && apt-get upgrade -y

echo "==> Installing Nginx"
apt-get install -y nginx

echo "==> Installing PHP ${PHP_VERSION} and extensions"
apt-get install -y software-properties-common
add-apt-repository -y ppa:ondrej/php
apt-get update
apt-get install -y \
    php${PHP_VERSION}-fpm \
    php${PHP_VERSION}-cli \
    php${PHP_VERSION}-mbstring \
    php${PHP_VERSION}-xml \
    php${PHP_VERSION}-curl \
    php${PHP_VERSION}-mysql \
    php${PHP_VERSION}-zip \
    php${PHP_VERSION}-bcmath \
    php${PHP_VERSION}-gd \
    php${PHP_VERSION}-pdo \
    php${PHP_VERSION}-intl \
    php${PHP_VERSION}-readline \
    unzip curl git

echo "==> Installing MySQL 8.0"
apt-get install -y mysql-server
mysql_secure_installation

echo "==> Installing Composer"
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer

echo "==> Installing Node.js ${NODE_VERSION}"
curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash -
apt-get install -y nodejs

echo "==> Installing Supervisor"
apt-get install -y supervisor

echo "==> Installing Certbot (SSL)"
apt-get install -y certbot python3-certbot-nginx

echo "==> Creating app directory"
mkdir -p ${APP_DIR}
chown -R www-data:www-data /var/www

echo "==> Setting up MySQL database"
echo "Run the following inside mysql:"
echo "  CREATE DATABASE personal_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
echo "  CREATE USER 'kgdev'@'localhost' IDENTIFIED BY 'your_strong_password';"
echo "  GRANT ALL PRIVILEGES ON personal_db.* TO 'kgdev'@'localhost';"
echo "  FLUSH PRIVILEGES;"

echo "==> Setting up Nginx site"
# Copy nginx config
# cp /path/to/nginx.conf /etc/nginx/sites-available/kgallarin.com
# ln -s /etc/nginx/sites-available/kgallarin.com /etc/nginx/sites-enabled/
# rm -f /etc/nginx/sites-enabled/default
# nginx -t && systemctl reload nginx

echo "==> Next steps:"
echo "  1. Clone your repo:  git clone git@github.com:yourusername/kgdev.git ${APP_DIR}"
echo "  2. Copy .env:        cp ${APP_DIR}/.env.example ${APP_DIR}/.env"
echo "  3. Fill in .env with DB, AWS, Resend, APP_KEY values"
echo "  4. Run:              cd ${APP_DIR} && composer install --no-dev"
echo "  5. Run:              php artisan key:generate"
echo "  6. Run:              php artisan migrate --seed"
echo "  7. Set permissions:  chown -R www-data:www-data ${APP_DIR}/storage ${APP_DIR}/bootstrap/cache"
echo "  8. Set up SSL:       certbot --nginx -d kgallarin.com -d www.kgallarin.com"
echo "  9. Set up Supervisor: cp ${APP_DIR}/scripts/supervisor.conf /etc/supervisor/conf.d/laravel-worker.conf"
echo "                        supervisorctl reread && supervisorctl update && supervisorctl start laravel-worker:*"

echo "==> Done!"
