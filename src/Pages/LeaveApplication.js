import React, { useState, useRef } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Grid,
  Box,
  IconButton,
} from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const leaveTypes = ["Sick Leave", "Personal Leave", "Medical Leave", "Academic Leave"];
const departments = ["ECE", "CSE", "MECH", "CIVIL", "EEE"];
const semesters = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

const initialApplications = [];

const LeaveApplication = () => {
  const [applications, setApplications] = useState(initialApplications);
  const [form, setForm] = useState({
    studentName: "",
    rollNumber: "",
    department: "",
    semester: "",
    leaveType: "",
    startDate: "",
    endDate: "",
    reason: "",
    attachment: null,
  });

  const printRefs = useRef({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setForm({ ...form, attachment: e.target.files[0] });
  };

  const calculateDays = (start, end) => {
    const s = new Date(start);
    const e = new Date(end);
    const diff = (e - s) / (1000 * 60 * 60 * 24) + 1;
    return diff > 0 ? diff : 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newApp = {
      id: applications.length + 1,
      ...form,
      totalDays: calculateDays(form.startDate, form.endDate),
      status: "Pending",
      attachmentURL: form.attachment ? URL.createObjectURL(form.attachment) : null,
    };
    setApplications([...applications, newApp]);
    setForm({
      studentName: "",
      rollNumber: "",
      department: "",
      semester: "",
      leaveType: "",
      startDate: "",
      endDate: "",
      reason: "",
      attachment: null,
    });
  };

  const handleDownloadPDF = async (id) => {
    const element = printRefs.current[id];
    if (!element) return;

    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`Leave_Application_${id}.pdf`);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Student Leave Application
      </Typography>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Apply for Leave
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth name="studentName" label="Student Name" value={form.studentName} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth name="rollNumber" label="Roll Number" value={form.rollNumber} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField select fullWidth name="department" label="Department" value={form.department} onChange={handleChange} required>
                {departments.map((dept) => (
                  <MenuItem key={dept} value={dept}>{dept}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField select fullWidth name="semester" label="Semester" value={form.semester} onChange={handleChange} required>
                {semesters.map((sem) => (
                  <MenuItem key={sem} value={sem}>{sem}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField select fullWidth name="leaveType" label="Leave Type" value={form.leaveType} onChange={handleChange} required>
                {leaveTypes.map((type) => (
                  <MenuItem key={type} value={type}>{type}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type="date" name="startDate" label="Start Date" InputLabelProps={{ shrink: true }} value={form.startDate} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth type="date" name="endDate" label="End Date" InputLabelProps={{ shrink: true }} value={form.endDate} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth multiline rows={3} name="reason" label="Reason for Leave" value={form.reason} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12}>
              <Button component="label" variant="outlined" startIcon={<UploadFileIcon />}>
                Upload Proof
                <input type="file" accept=".pdf,.jpg,.jpeg,.png" hidden onChange={handleFileChange} />
              </Button>
              {form.attachment && <span style={{ marginLeft: "10px" }}>{form.attachment.name}</span>}
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained">Submit</Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>

      <Typography variant="h6" gutterBottom>
        My Leave Applications
      </Typography>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Roll No</TableCell>
              <TableCell>Dept</TableCell>
              <TableCell>Sem</TableCell>
              <TableCell>Leave Type</TableCell>
              <TableCell>Dates</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Proof</TableCell>
              <TableCell>Download</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {applications.map((app) => (
              <TableRow key={app.id}>
                <TableCell>{app.studentName}</TableCell>
                <TableCell>{app.rollNumber}</TableCell>
                <TableCell>{app.department}</TableCell>
                <TableCell>{app.semester}</TableCell>
                <TableCell>{app.leaveType}</TableCell>
                <TableCell>{app.startDate} to {app.endDate} ({app.totalDays} days)</TableCell>
                <TableCell>{app.status}</TableCell>
                <TableCell>
                  {app.attachmentURL ? (
                    <a href={app.attachmentURL} target="_blank" rel="noreferrer">View</a>
                  ) : (
                    "—"
                  )}
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleDownloadPDF(app.id)}><PictureAsPdfIcon /></IconButton>
                </TableCell>
                <td style={{ display: "none" }}>
                  <div ref={(el) => (printRefs.current[app.id] = el)}>
                    <h2>Leave Application</h2>
                    <p><strong>Name:</strong> {app.studentName}</p>
                    <p><strong>Roll No:</strong> {app.rollNumber}</p>
                    <p><strong>Department:</strong> {app.department}</p>
                    <p><strong>Semester:</strong> {app.semester}</p>
                    <p><strong>Leave Type:</strong> {app.leaveType}</p>
                    <p><strong>Start Date:</strong> {app.startDate}</p>
                    <p><strong>End Date:</strong> {app.endDate}</p>
                    <p><strong>Total Days:</strong> {app.totalDays}</p>
                    <p><strong>Reason:</strong> {app.reason}</p>
                    <p><strong>Status:</strong> {app.status}</p>
                    {app.attachmentURL && (
                      <p><strong>Proof:</strong> Attached</p>
                    )}
                  </div>
                </td>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default LeaveApplication;
