import React, { useState } from 'react';
import './../Stylesheet.css';
import { API } from "aws-amplify";
import { createTask } from './../graphql/mutations';


const CreateTaskModal = ({ isOpen, onClose, addTaskFromState}) => {
    const [formData, setFormData] = useState({
        title: '',
        status: '',
        description: '',
        start_date: null,
        expected_end_date: null,
        end_date: null,
        priority: ''
      });
      if (!isOpen) return null;
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const temp = await API.graphql({
                query: createTask,
                variables: {
                    input: { 
                        "title": formData.title,
                        "status":  'TODO',
                        "description": formData.description,
                        "start_date": formData.start_date,
                        "expected_end_date": formData.expected_end_date,
                        "end_date": formData.end_date,
                        "priority": formData.priority
                    }
                }
            });
            console.log(temp);
        } catch (error) {
            console.error("An error occurred:", error);
        }
        formData.status = 'TODO';
        addTaskFromState(formData);
        onClose();
      }


    return (
        <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>Close</button>
        <h2>Create Task</h2>
        <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input className='modal-text' type="text" name="title" value={formData.title} onChange={handleChange} />
      </div>
      <div>
        <label>Status:</label>
        <select name="priority" value={formData.priority} onChange={handleChange}>
                    <option value='TaskStatus.TODO'>To do</option>
                    <option value="IN_PROGRESS">In progress</option>
                    <option value="COMPLETED">Completed</option>
        </select>
      </div>
      <div>
        <label>Description:</label>
        <textarea className='modal-text' name="description" value={formData.description} onChange={handleChange} />
      </div>
      <div>
        <label>Start Date:</label>
        <input type="date" name="start_date" value={formData.start_date} onChange={handleChange} />
      </div>
      <div>
        <label>Expected End Date:</label>
        <input  type="date" name="expected_end_date" value={formData.expected_end_date} onChange={handleChange} />
      </div>
      <div>
        <label>End Date:</label>
        <input type="date" name="end_date" value={formData.end_date} onChange={handleChange} />
      </div>
      <div>
        <label>Priority:</label>
        <input type='number' min="1" max="5" name="priority" value={formData.priority} onChange={handleChange}>
        </input>
      </div>
      <button type="submit">Submit</button>
    </form>
      </div>
    </div>
    );
}

export default CreateTaskModal;