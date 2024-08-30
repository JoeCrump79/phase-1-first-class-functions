function receivesAFunction(callBack){
    callBack();
}

function returnsANamedFunction(){
    function one(){

    }
    return one;
}

function returnsAnAnonymousFunction(){
    return () => 0;
}

