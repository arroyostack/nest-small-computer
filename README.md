## Description

This repository serves as a guide for understanding and working with Nest.js, focusing on modules and dependency injection through a practical example.
The purpose of this project is to grasp the concepts of modules and dependency injection in Nest.js.

### Application Overview

### Project Goal

A simple computer model, focusing on its core components: CPU, disk, and power supply. Each component will be modeled as a separate module, demonstrating how modules and dependency injection work together.

### Project Structure

- **Power Module**: Contains a service, Power Service, responsible for supplying power.
- **Disk Module**: Contains a service for disk operations.
- **CPU Module**: Contains a service for CPU operations.

### Dependency Hierarchy

- The **Computer Module** depends on both CPU and disk modules.
- Both CPU and disk modules depend on the power module.

# Intallation

```
npm install
```

# Scripts

```
npm run start:dev


```