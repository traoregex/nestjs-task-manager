import { User } from './../auth/user.entity';
import { Task } from './../tasks/task.entity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'testuser',
  password: 'testuser',
  database: 'taskmanagement',
  entities: [Task, User],
  synchronize: true,
};
