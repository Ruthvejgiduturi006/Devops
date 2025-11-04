pipeline {
    agent any

    stages {
       stage('Clone Repository') {
    steps {
        git branch: 'main',
            url: 'https://github.com/Ruthvejgiduturi006/Devops.git',
            credentialsId: 'github-creds'
    }
}

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('my-flask-app')
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    docker.image('my-flask-app').run('-d -p 5000:5000')
                }
            }
        }
        
    }

    post {
        success {
            echo '✅ Build and container run successful!'
        }
        failure {
            echo '❌ Build failed!'
        }
    }
}
