pipeline {
    agent any

    tools {
        nodejs "NodeJS"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Build Docker Image') {
    steps {
        bat 'docker build -t college-frontend .'
    }
}

stage('Stop Old Container') {
    steps {
        bat 'docker rm -f college-ui || exit 0'
    }
}

stage('Run New Container') {
    steps {
        bat 'docker run -d -p 3000:80 --name college-ui college-frontend'
    }
}
    }

    post {
        success {
            echo 'Build completed successfully.'
        }

        failure {
            echo 'Build failed.'
        }
    }
}