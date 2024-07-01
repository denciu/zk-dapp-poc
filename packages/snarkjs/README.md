# SnarkJS PoC app

## Installation
1. `$ docker-compose -f docker/docker-compose.snarkjs.yml run test-runner bash`
2. Within running container run `$ bun install`

## Generation zk files
Within docker container run
1. `bun run circom:compile`
2. `bun run generate:proving-key`
3. `bun run generate:verifier`
4. `bun run compile`

## Testing
Within docker container run `bun run test`