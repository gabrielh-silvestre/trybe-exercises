/*
1. Monte uma query que exiba a diferença de dias entre '2030-01-20' e hoje.
2. Monte uma query exiba a diferença de horas entre '10:25:45' e '11:00:00' .
*/

/* 1 */ SELECT DATEDIFF('2030-01-20', NOW());

/* 2 */ SELECT TIMEDIFF('10:25:45', '11:00:00');
