#include<bits/stdc++.h>
using namespace std;


int main()
{
	int T; cin>>T;
	while(T--)
	{
		int f=0;
		int n; cin>>n;
		int res=0;
		stack<pair<int,int> > s,s2;
		int a[n][3];
		for(int i=0;i<n;i++)
			cin>>a[i][0]>>a[i][1]>>a[i][2];
		int t; cin>>t; 
		if(a[0][0]>t){cout<<"False"<<endl; continue; }
		res+=a[0][0];  s.push({a[0][0],a[0][2]}); 
		
		int l=a[0][1],r=a[0][2];
		for(int i=1;i<n;i++)
		{
			while(!s.empty()){
				 pair<int,int> temp=s.top(); s.pop();
				 if(temp.second<=a[i][1]){res-=temp.first;   }
				 else { s2.push(temp);    }
			 }
			 while(!s2.empty()){ s.push(s2.top()); s2.pop();	 }
			 res+=a[i][0];                                                                      
			 s.push({a[i][0],a[i][2]});                         
			 if(res>t){f=1; cout<<"False"<<endl; break; }                                         
		}	
		if(!f)cout<<"True"<<endl;
	}
	
	
	
}
