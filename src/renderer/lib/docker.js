import Docker from 'dockerode'
import fs from 'fs'

const DOCKER_ENGINE_UNIX_SOCKET = '/var/run/docker.sock'
var socket = process.env.DOCKER_SOCKET || DOCKER_ENGINE_UNIX_SOCKET
var stats

try {
  stats = fs.statSync(socket)
  if (!stats.isSocket()) {
    console.error('Are you sure the docker is running?')
  }
} catch (e) {
  console.error(e)
}

var docker = new Docker({socketPath: socket})

export default docker
