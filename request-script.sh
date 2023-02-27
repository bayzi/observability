TIMES=1
for i in $(eval echo "{1..$TIMES}")
do
    siege -c 1 -r 10 http://localhost:8080/demo
    siege -c 3 -r 5 http://localhost:8080/demo/io_task
    siege -c 2 -r 5 http://localhost:8080/demo/cpu_task
    siege -c 5 -r 3 http://localhost:8080/demo/random_sleep
    siege -c 2 -r 10 http://localhost:8080/demo//random_status
    siege -c 2 -r 3 http://localhost:8080/demo/chain
    siege -c 1 -r 1 http://localhost:8080/demo/error_test
    sleep 5
done
