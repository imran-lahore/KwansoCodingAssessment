import React, { useEffect, useState } from "react";
import TaskService from "../../services/task";
import { useNavigate } from "react-router-dom";
import ITask from "../../types/task.type";
import { Table } from "react-bootstrap";

const Tasks: React.FC = (): JSX.Element => {
  const [tasks, setTasks] = useState<ITask[]>([{ id: "", name: "" }]);
  const navigate = useNavigate();
  const card = 0;
  useEffect(() => {
    TaskService.list_task()
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        let tasksArr: ITask[] = [];
        data.map((task: ITask) => {
          tasksArr.push(task);
        });
        return tasksArr;
      })
      .then((data) => {
        setTasks(data);
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          navigate("/login");
        }

        console.log(err);
      });
  }, []);
  
  
  const TaskItems = tasks.map((task) => (
<div className= "card text-white bg-primary mb-3">
    <div className="card-header">Task Name : {task.name} </div>
    <div className="card-body">
      {/* <h4 className="card-title">ID {task.id}</h4> */}
      <p className="card-text">ID : {task.id}.</p>
    </div>
</div>
  
  ));

  return (
    <div>

      {TaskItems}
      {/* <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>{TaskItems}</tbody>
      </Table> */}

</div>
  );
};

export default Tasks;
