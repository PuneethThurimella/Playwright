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
SELECT DeptId, MAX(Salary) AS MaxSalary
FROM Employee GROUP BY DeptId;

--Get duplicate employee records based on email.
SELECT Email, COUNT(*) AS DuplicateCount
FROM Employee GROUP BY Email HAVING COUNT(*) > 1;

--Get employees hired in last 1 year.
SELECT * FROM Employee WHERE HireDate >= DATEADD(YEAR, -1, GETDATE());

--Fetch first and last employee based on hire date.
SELECT * FROM Employee WHERE HireDate IN (
    (SELECT MIN(HireDate) FROM Employee),
    (SELECT MAX(HireDate) FROM Employee)
);







