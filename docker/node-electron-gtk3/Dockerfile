FROM node:12.15

RUN apt-get update && apt-get install -y \
    openssl \
    libnss3 \
    libgtk-3-0 \
    libxss-dev \
    libasound2

RUN apt-get update \
    #
    # Install Docker CE CLI
    && apt-get install -y apt-transport-https ca-certificates curl gnupg-agent software-properties-common lsb-release \
    && curl -fsSL https://download.docker.com/linux/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/gpg | apt-key add - 2>/dev/null \
    && add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/$(lsb_release -is | tr '[:upper:]' '[:lower:]') $(lsb_release -cs) stable" \
    && apt-get update \
    && apt-get install -y docker-ce-cli

VOLUME /var/run/docker.sock /var/run/docker.sock

WORKDIR /app
