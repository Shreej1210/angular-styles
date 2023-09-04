import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
    selector: 'app-server',
    templateUrl:'./server.component.html',
    styles :['h2{color:green}']
     
     
})
    export class ServerComponent{
        testinput=15;
        testvar="success";
        testcolor="blue";
        serverid=10;
        servername="mycloudserver";
        serverstatus=true;
        myserverprocess=false;
        myserverdata="no call for server";
        myinput='';
        fruits=['apple','orange','watermelon'];
getserverstatus()
        {
         return this.serverstatus;
        }
        constructor()
        {
        
            setTimeout(()=>{this.myserverprocess=true},2000);

        }
        onservercall()
        {
            this.testinput=2;
            this.testcolor="green";
            this.testvar="primary";
            this.fruits.push('grapes');
this.myserverdata="server called";
        }



    }