--CREATE DATABASE Hackaton
USE Hackaton
GO
BEGIN
	PRINT '[DROP] - Dropping all the objects to recreate'
    DROP TABLE IF EXISTS [Country]
	DROP TABLE IF EXISTS [State]
	DROP TABLE IF EXISTS [User]
	PRINT '[DROP] - done'
	PRINT '---------------'
END
GO
PRINT 'Start - build all the objects'
PRINT '------------------------------'

--User
BEGIN TRY
    IF OBJECT_ID('User') IS NULL
    BEGIN
        CREATE TABLE [User] (
     	   [User_ID] INT NOT NULL IDENTITY(1,1), --PK
     	   [Name] VARCHAR(100),
     	   [Surname] VARCHAR(100),
		   [Email] VARCHAR(100),
		   [Password] VARCHAR(50),
     	   CONSTRAINT [PK_User_ID] PRIMARY KEY CLUSTERED ([User_ID])
     	   )
        PRINT '[User]  -  Creating object'
    END
    ELSE PRINT '[User]  -  Object already exists'
END TRY
BEGIN CATCH
    PRINT CONCAT('[User]  -  !!FAILED!! ', ERROR_MESSAGE())
END CATCH
GO

--User
BEGIN TRY
    IF OBJECT_ID('State') IS NULL
    BEGIN
        CREATE TABLE [State] (
     	   [State_ID] INT NOT NULL IDENTITY(1,1), --PK
     	   [Name] VARCHAR(50),
     	   CONSTRAINT [PK_State_ID] PRIMARY KEY CLUSTERED ([State_ID])
     	   )
        PRINT '[State]  -  Creating object'
    END
    ELSE PRINT '[State]  -  Object already exists'
END TRY
BEGIN CATCH
    PRINT CONCAT('[State]  -  !!FAILED!! ', ERROR_MESSAGE())
END CATCH
GO

--User
BEGIN TRY
    IF OBJECT_ID('Country') IS NULL
    BEGIN
        CREATE TABLE [Country] (
     	   [Country_ID] INT NOT NULL IDENTITY(1,1), --PK
		   [State_ID] INT, --FK
     	   [Name] VARCHAR(50),
     	   CONSTRAINT [PK_Country_ID] PRIMARY KEY CLUSTERED ([Country_ID])
     	   )
        PRINT '[Country]  -  Creating object'
    END
    ELSE PRINT '[Country]  -  Object already exists'
END TRY
BEGIN CATCH
    PRINT CONCAT('[Country]  -  !!FAILED!! ', ERROR_MESSAGE())
END CATCH
GO