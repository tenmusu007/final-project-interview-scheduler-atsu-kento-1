-- SELECT day.day_id as id,appointment.time,day.name FROM appointment JOIN day ON appointment.day_id = day.day_id JOIN interviews ON interviews.appointment_id = appointment.id WHERE day.name = 'Monday';
-- SELECT day.day_id as id,appointment.time FROM appointment JOIN day ON appointment.day_id = day.day_id JOIN interviews ON interviews.appointment_id = appointment.id WHERE day.name = 'Monday';
-- SELECT student,appointment.day_id as id,day.name as name FROM appointment,day,interviews WHERE appointment.day_id = 1 AND day.name = 'Monday';
-- SELECT interviews.id,interviews.appointment_id,interviews.student,interviewers.name,interviewers.avatar FROM interviews JOIN appointment ON interviews.appointment_id = appointment.id JOIN day ON appointment.day_id = day.day_id JOIN interviewers ON interviews.interviewer_id = interviewers.id WHERE day.name = 'Monday';
SELECT * FROM interviews;
-- DROP TABLE interviews;
-- DELETE FROM interviews WHERE interviews.appointment_id = 25;
-- UPDATE interviews SET student = 'Abon', interviewer_id = 2, appointment_id = 3 WHERE interviews.appointment_id = 3;