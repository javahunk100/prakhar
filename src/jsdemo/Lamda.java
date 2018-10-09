package jsdemo;

interface FuncInterface {
    // An abstract function
    boolean abstractFun(int x,int y);
}
public class Lamda {
	 public static void main(String[] args) {
		 FuncInterface ref=	(a,b) -> true;

	}
}
