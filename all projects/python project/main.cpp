#include <iostream>
using namespace std;
/* 1
int main()
{
    cout<<"Hello World";

    return 0;
}
*/
/* 2
int main() 
{
    string name; 
    int age;
    cout << "name? ";
    cin >> name;
    cout << "Age? ";
    cin >> age;
    cout << "Hello! My name is "<<name<<", my age is "<< age;

    return 0;
}
*/
/* 3
int main() 
{
    int a, b, c;
    cout << "Enter first number a? ";
    cin >> a;
    cout << "Enter second number b? ";
    cin >> b;
    c = a+b;
    cout << "Addition of a and b = "<<c;

    return 0;
}
*/
/* 4
int main() 
{
    int a, b;
    cout << "Enter first number a? ";
    cin >> a;
    cout << "Enter second number b? ";
    cin >> b;
    if(a>b)
    cout << a <<" is greater "<<b;
    else
    cout << b <<" is greater "<<a;
    return 0;
}
*/
/* 5
int main()
{
    int i,n;
    cout<<"Enter the number ";
    cin>>n;
    for(i=1;i<=n;i++)
    {
        cout<<i*2<<" ";
    }
}
*/

int main()
{
    int i,n;
    cout<<"Enter the number ";
    cin>>n;
    for(i=1;i<=n;i++)
    {
        cout<<i+2<<" ";
    }
}

/* 7
int main()
{
int i,n;
    cout<<"Enter the number ";
    cin>>n;
    for(i=1;i<=n;i++)
    {
        cout<<i*i<<" ";
    }
}
*/
/* 8
int main()
{
    int a,b,c, greatest;
    cout<<"enter the numbers ";
    cin>>a>>b>>c;
    greatest=a;
    if (b > greatest) 
    {
        greatest = b;
    }
    if (c > greatest) 
    {
        greatest = c;
    }

    cout << "The greatest of the three numbers is: " << greatest;
}
*/
/*
int main() 
{
    int a, b, c;
    cout << "Enter three numbers: ";
    cin >> a >> b >> c;
    
    int sec;
    if (a >= b && a >= c) 
    {
        sec = (b >= c) ? b : c;
    } else if (b >= a && b >= c) 
    {
        sec = (a >= c) ? a : c;
    } else 
    {
        sec = (a >= b) ? a : b;
    }
    cout << "The second largest of the three numbers is: " << sec;
}
*/
/*
int main() 
{
    int n;
    cout << "Enter the number of terms ";
    cin >> n;
    int first = 0, second = 1, next;

    for (int i = 0; i < n; ++i) 
    {
        if (i <= 1) 
        {
            next = i;
        } 
        else 
        {
            next = first + second;
            first = second;
            second = next;
        }
        cout << next << " ";
    }
    return 0;
}
*/

