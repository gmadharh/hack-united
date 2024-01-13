./wait-for-it.sh db:3306 -- echo "Database is ready"

mysql -h db -u root -pMegamitensei00 NewYearsChallenge < /docker-entrypoint-initdb.d/script.sql

exec "$@"
