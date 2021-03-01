const cpp = `// Online C++ compiler to run C++ program online
#include <iostream>

int main() {
    // Write C++ code here
    std::cout << "Hello world!";

    return 0;
}`;

const c = `// Online C compiler to run C program online
#include <stdio.h>

int main() {
    // Write C code here
    printf("Hello world");
    
    return 0;
}`;

const python = `# Online Python compiler (interpreter) to run Python online.
# Write Python 3 code in this online editor and run it.
print("Hello world")`;

const java = `// DONT CHANGE THE NAME OF MAIN CLASS
// Online Java Compiler.
// Code, Compile, Run java program online.

public class Main
{
    public static void main(String[] args) {
    System.out.println("Hello World");
    }
}
`;

export const code = { cpp, c, python, java };
