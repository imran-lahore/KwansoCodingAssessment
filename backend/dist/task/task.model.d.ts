import * as mongoose from 'mongoose';
export declare const TaskSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any>, {}, {}>;
export interface Task extends mongoose.Document {
    id: string;
    name: string;
}
