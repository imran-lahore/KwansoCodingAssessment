import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TaskService from "../../services/task";
import { useForm } from "react-hook-form";

const CreateTask: React.FC = (): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createTask = (data: any) => {
    setLoading(true);

    TaskService.create_task(data.name).then(
      () => {
        navigate("/list-tasks");
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setLoading(false);
      }
    );
  };

  return (
    <>
      <div className="container">
        <div
          className="row d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="card mb-3" style={{ maxWidth: "320px" }}>
            <div className="col-md-12">
              <div className="card-body">
                <h3 className="card-title text-center text-secondary mt-3">
                  Create Task
                </h3>
                <form autoComplete="off" onSubmit={handleSubmit(createTask)}>
                  <div className="mb-3 mt-4">
                    <label className="form-label">Task Name</label>
                    <input
                      type="name"
                      className="form-control shadow-none"
                      id="exampleFormControlInput1"
                      {...register("name", {
                        required: "Task name is required!",
                      })}
                    />
                    {errors.email && (
                      <p className="text-danger" style={{ fontSize: 14 }}>
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="text-center mt-4 ">
                    <button
                      className="btn btn-outline-primary text-center shadow-none mb-3"
                      type="submit"
                    >
                      {loading ? (
                        <span className="">loading...</span>
                      ) : (
                        <span>Submit</span>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTask;
