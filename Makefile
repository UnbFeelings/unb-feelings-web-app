file_dev := "docker-compose.yml"
file_test := "docker-compose.test.yml"
file_prod := "docker-compose.prod.yml"

up:
# Create the image and container
	docker-compose -f ${file_dev} up

logs:
	# See the logs from application
	sudo docker-compose -f ${file_dev} logs -f -t

start:
	# Start containers
	sudo docker-compose -f ${file_dev} start

stop:
	# Stop containers
	sudo docker-compose -f ${file_dev} stop

ps:
	# Verify running containers
	sudo docker-compose -f ${file_dev} ps

rm:
	# Remove containers
	sudo docker-compose -f ${file_dev} rm

test-env:
	# Up test enviroment
	sudo docker-compose -f ${file_dev}  -f ${file_test} up

prod-env:
	# Up prod enviroment
	sudo docker-compose -f ${file_dev}  -f ${file_prod} up


service := "react"
bash:
	# Get in the bash of container
	sudo docker-compose -f ${file_dev} exec ${service} bash
