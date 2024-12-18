import React, { useContext, useState } from 'react';
import NoteContext from 'context/notes/noteContext';

import { userApi } from '../utils/utils'
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
  Label,
} from "reactstrap";
import axios from 'axios';
import { toast } from 'sonner';

function AddStudent() {

  const Add = useContext(NoteContext);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    gender: '',
    phoneNo: '',
    password: '',
    enrolmentNo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${userApi}/add/student`, formData, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true
      })
      if (res.data.success) {
        toast.success(res.data.message)
      }
    } catch (error) {
      toast.error(error.response.data.message)
    }
  };

  return (
    <Form className='content' onSubmit={handleSubmit}>
      <Row>
        <Col md="12">
          <Card className="card-user">
            <CardHeader>
              <CardTitle tag="h5" >Add Students</CardTitle>
            </CardHeader>
            <CardBody>
              <FormGroup>
                <Label for="firstname">First Name</Label>
                <Input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="First Name"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="email">Email address</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>


              <FormGroup>
                <Label for="enrollmentno">Enrollment No.</Label>
                <Input
                  type="text"
                  name="enrolmentNo"
                  id="enrolmentNo"
                  placeholder="Enrollment No."
                  value={formData.enrolmentNo}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label for="gender">Gender</Label>
                <Input
                  type="select"
                  name="gender"
                  id="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="phonenumber">Phone Number</Label>
                <Input
                  type="text"
                  name="phoneNo"
                  id="phoneNo"
                  placeholder="Phone Number"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <Button type="submit" color="primary">Add Student</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Form>
  );
};

export default AddStudent;
