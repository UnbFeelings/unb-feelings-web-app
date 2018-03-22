file := "docker-compose.develop.yml"

up:
# Create the image and container
	docker-compose -f ${file} up -d

logs:
	# See the logs from application
	sudo docker-compose -f ${file} logs -f -t

start:
	# Start containers
	sudo docker-compose -f ${file} start

stop:
	# Stop containers
	sudo docker-compose -f ${file} stop

ps:
	# Verify running containers
	sudo docker-compose -f ${file} ps

rm:
	# Remove containers
	sudo docker-compose -f ${file} rm


service := "react"
bash:
	# Get in the bash of container
	sudo docker-compose -f ${file} exec ${service} bash
