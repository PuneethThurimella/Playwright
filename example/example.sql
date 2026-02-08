-- Find the second highest salary from Employee table.
SELECT MAX(Salary) AS SecondHighestSalary FROM Employee
WHERE Salary < (SELECT MAX(Salary) FROM Employee);

-- Get all employees even if they don't belong to any department (LEFT JOIN).
SELECT e.EmpId, e.EmpName, d.DeptName FROM Employee e
LEFT JOIN Department d ON e.DeptId = d.DeptId;

--Find department-wise employee count.
SELECT DeptId, COUNT(*) AS EmployeeCount FROM Employee GROUP BY DeptId;

-- Find departments having more than 5 employees.
SELECT DeptId, COUNT(*) AS EmployeeCount FROM Employee
GROUP BY DeptId HAVING COUNT(*) > 5;

--Find highest salary in each department.
SELECT DeptId, MAX(Salary) AS MaxSalary FROM Employee GROUP BY DeptId;

--Get duplicate employee records based on email.
SELECT Email, COUNT(*) AS DuplicateCount FROM Employee GROUP BY Email HAVING COUNT(*) > 1;

--Get employees hired in last 1 year.
SELECT * FROM Employee WHERE HireDate >= DATEADD(YEAR, -1, GETDATE());

--Fetch first and last employee based on hire date.
SELECT * FROM Employee WHERE HireDate IN (
    (SELECT MIN(HireDate) FROM Employee),(SELECT MAX(HireDate) FROM Employee) );

--Insert a single row
INSERT INTO employees (id, name, department, salary) VALUES (1, 'John Doe', 'Engineering', 75000);

--Insert multiple rows
INSERT INTO employees (id, name, department, salary)
VALUES (2, 'Jane Smith', 'HR', 60000), (3, 'Mike Brown', 'Finance', 68000);

--Insert using values from another table
INSERT INTO archived_employees (id, name, department)
SELECT id, name, department FROM employees WHERE department = 'HR';

--Update a single column
UPDATE employees SET salary = 80000 WHERE id = 1;

--Update multiple columns
UPDATE employees SET department = 'Product', salary = 82000 WHERE name = 'John Doe';

-- Delete a single row (by condition)
DELETE FROM employees WHERE id = 1;

-- Delete multiple rows (by condition)
DELETE FROM employees WHERE department = 'HR';

-- Delete using values from another table (subquery)
DELETE FROM employees WHERE id IN (SELECT id FROM archived_employees);

-- Delete all rows from a table (keeps table structure)
DELETE FROM employees;

-- Faster way to remove all rows (cannot be rolled back in most DBs)
TRUNCATE TABLE employees;






