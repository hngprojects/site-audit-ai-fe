[Unit]
Description=Site Audit AI Frontend - $DEPLOY_ENV
After=network.target

[Service]
Type=simple
User=$SERVICE_USER
Group=$SERVICE_GROUP
WorkingDirectory=$APP_ROOT
Environment="NODE_ENV=production"
Environment="PORT=$APP_PORT"
ExecStart=$NPM_START
Restart=always
RestartSec=10
StandardOutput=append:/var/log/$SERVICE_NAME.log
StandardError=append:/var/log/$SERVICE_NAME-error.log

[Install]
WantedBy=multi-user.target
