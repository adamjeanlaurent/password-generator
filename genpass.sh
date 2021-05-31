num_args=$#
args=( "$@" )
argsForProgram=""

for(( i=0; i<$num_args; i++ ))
do
    if [ "$i" -eq 0 ];then
        argsForProgram="${args[$i]}"
    fi
    if [ "$i" -gt 0 ];then
        argsForProgram="${argsForProgram} ${args[$i]}"
    fi
done

node ./build/main.js ${argsForProgram}