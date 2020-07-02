
SET PACKAGE=collider.jam
SET INSTALL=https://github.com/invider/collider.jam.git

npm uninstall -g collider.jam

npm install -g %INSTALL%

jam -t -d play

