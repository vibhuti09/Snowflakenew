--Create a hello world Snowflake Stored Procedure.
create or replace procedure MyProcedure()
--Optionally return a value, only one.
returns VARCHAR
language JavaScript
as
  -- The "$$" indicates the beginning and end of the JavaScript code
  -- in the stored procedure
  $$  
   
  // Since we're in Javascript now, use Javascript comment markers.
  return "Hello world."
   
  $$;
  
  --Call the stored procedure.
--call MyProcedure();

