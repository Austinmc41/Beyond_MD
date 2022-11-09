# start the container in detached mode 
# assumes correct perms
docker-compose up -d

# when service is ready is will open browser
while ! curl --fail --silent --head http://localhost:8000; do
  sleep 1
done

# launch local host
open http://localhost:8000