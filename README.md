## Scripts to run docker repo

1. move map tiles to nginx container > assets > tiles

2. build and run docker

```bash
#!/bin/bash
cd docker
docker build -t nginx .
docker run -p 1235:1235 --name nginx nginx
docker restart nginx (restart container onwards)
```