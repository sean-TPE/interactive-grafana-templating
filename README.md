# interactive-grafana-templating
How to interact with grafana templating ?

[What’s the best way to access dashboard variables within a plugin](https://community.grafana.com/t/whats-the-best-way-to-access-dashboard-variables-within-a-plugin/1937)  

It seems there is no such API for user to interact with grafana templating on a panel plugin.  
Well...  
Give it a try!  


# About interactive-grafana-templating
interactive-grafana-templating is a simple grafana panel plugin. Just show a possible way to interact with templating through panel.


# How it works?
* Step 1. Prepare your grafana  
Install [Grafana](http://docs.grafana.org/project/building_from_source/).

* Step 2. Install interactive-grafana-templating   
Just put `interactive-grafana-templating` in `data/plugins`.
You can find more detail [here](http://docs.grafana.org/plugins/developing/development/).

* Step 3. Start grafana  
Before any modification take place after modifying plugins, grafana-server needs to be [restarted](http://docs.grafana.org/plugins/installation/).


* Step 4. Add **Custom** templating  
Add some **Custom** templating by Grafana GUI.
    ![Alt Text](https://raw.githubusercontent.com/wiki/sean-TPE/interactive-grafana-templating/img/step_1.gif)

* Step 5. You can interact with the templating!  
You can find a drop-down list on interactive-grafana-templating panel.  
It list all grafana templating on current dashboard. Just choose one. Try to type someting in the textfield!
    ![Alt Text](https://raw.githubusercontent.com/wiki/sean-TPE/interactive-grafana-templating/img/setp_2.gif)



**This is not a good solution. I wonder if there is any good solution...**
