# Beyond_MD

part1: First part of the assignment

Steps to run: 

To launch the static files to local host, you can simply run the launch-util.sh file using the command 
`sh launch-util.sh`
if for some reason this command does not work you may need to check whether you have proper permissions to access files
in which case you can use `chmod 999 <filename>` if there is a specific file you don't have permissions to use, or you can add sudo
before the docker commands in the script.

If all else fails, you should just be able to run `docker-compose up -d` to run the application container in detached mode, and then 
all you need to do is navigate to localhost:8000 in your favorite browser to see the static content being served. 