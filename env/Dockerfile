# doc : https://docs.docker.com/engine/reference/builder/#shell
# start from image
FROM webdevops/apache:latest
LABEL maintainer="boly38@gmail.com"

RUN apt-get update

# certbot example (from https://doc.ubuntu-fr.org/tutoriel/securiser_apache2_avec_ssl )
# RUN apt --assume-yes install software-properties-common && add-apt-repository ppa:certbot/certbot && apt update && apt --assume-yes install certbot python-certbot-apache
# RUN certbot --authenticator standalone --installer apache -m boly38@gmail.com --agree-tos --non-interactive || echo force 0 status to continue

# self-signed DEV certificates
RUN mkdir -p /var/pk && chmod 777 /var/pk && openssl req -x509 -newkey rsa:4096 -days 365 -nodes -subj "/C=FR/ST=Geokrety/L=France" -keyout /var/pk/key.pem -out /var/pk/cert.pem

# update global apache conf
COPY exposed/docker/apache2.conf /etc/apache2/apache2.conf
# update docker apache site
COPY exposed/docker/10-server.conf /opt/docker/etc/httpd/conf.d/10-server.conf

# enable apache http proxy module
RUN a2enmod proxy_http
