FROM node:12.14

RUN apt-get update && apt-get install -y \
    git \
    zip \
    openssl \
    procps \
    libnss3 \
    libgtk-3-0

# # Install Docker from Docker Inc. repositories.
# RUN curl -sSL https://get.docker.com/ | sh
# # Install the magic wrapper.
# ADD ./wrapdocker /usr/local/bin/wrapdocker
# RUN chmod +x /usr/local/bin/wrapdocker

# # Define additional metadata for our image.
# VOLUME /var/lib/docker

RUN apt-get update \
    #
    # Install Docker CE CLI
    && apt-get install -y apt-transport-https ca-certificates curl gnupg-agent software-properties-common lsb-release \
    && curl -fsSL https://download.docker.com/linux/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/gpg | apt-key add - 2>/dev/null \
    && add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/$(lsb_release -is | tr '[:upper:]' '[:lower:]') $(lsb_release -cs) stable" \
    && apt-get update \
    && apt-get install -y docker-ce-cli \
    #
    # Install Docker Compose
    && curl -sSL "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose \
    && chmod +x /usr/local/bin/docker-compose

RUN docker --version
# RUN docker ps
# RUN service docker start

COPY .bashrc /root/.bashrc

WORKDIR /var/www/html

