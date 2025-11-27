[Unit]
Description=Site Audit AI Frontend - $DEPLOY_ENV
After=network.target

[Service]
Type=simple
User=$SERVICE_USER
Group=$SERVICE_GROUP
WorkingDirectory=$APP_ROOT
EnvironmentFile=$APP_ROOT/.env
ExecStart=pnpm run start --port $APP_PORT
Restart=always
RestartSec=10
StandardOutput=append:/var/log/$SERVICE_NAME.log
StandardError=append:/var/log/$SERVICE_NAME-error.log

[Install]
WantedBy=multi-user.target
