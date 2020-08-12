#Dewi

REPO HAS BEEN DEPRACTED:     

    django component
        https://github.com/Ashwin-Pokharel/dewi-django/

    mobile app component
        https://github.com/shaygyawali/Dewi-Mobile

    machine learning component
        https://github.com/Ashwin-Pokharel/dewi-ML


A learning management system designed to help students

- This application consists of 3 main services
    - Rest API
        - Rest API to facilitate communications between the different services offered by dewi
        - Allow for decoupling of the backend and frontend for rapid development. 
        - Provide a scalable architecture for future expansions
        - Django Admin provides an easy way to interact with the Rest API service. 
    - Mobile App
        - Built using react native for use in both IOS and Android
        - Persistent login system
        - Ability to register as a new user
        - User on-boarding form to collect info about the user-
        Ability for a user to set goals for the year/semester
        - Live impact assessment of their goal on their overall GPA
    - TensorFlow model
        - Generate synthetic data for training/testing  utilizing some assumptions
        - Utilize a gaussian distribution model for training data to account for randomness as well as noise. 
        - Use techniques such as one-hot encoding to reduce bias/ variability in the system. 
        - predict the best time of the week / best time of the day to send notification
        - Ability to run version 1 of the model in a docker container that can be accessed via REST API.


- To run locally
    - Rest API
        - Make sure you have python and virtualenv installed
        - `cd path/to/dir`
        - `git clone https://github.com/Ashwin-Pokharel/IBMCallForCodeLMS`
        - `cd IBMCallForCodeLMS/djangoAPI/`
        - `cp .env.example .env` not all credentials are provided, contact for details.
        - `./run.sh`
