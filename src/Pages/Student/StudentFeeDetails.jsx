import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tabs,
  Tab,
  IconButton,
  Collapse,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  marginLeft: "auto",
}));

const data = {
  studentInfo: {
    name: "Ram Swami",
    regNumber: "GHRUA23015280237",
    batch: "2023-2025",
    stream: "MCA - MCA - III",
    section: "MCA_D_NGP",
    rollNumber: "NG-MCA-D-37",
    session: "Winter 2024",
    totalComponent: 8,
    scholarshipAmount: 25000,
  },
  feeDetails: {
    "2024-2025": {
      academic: [
        {
          feeHead: "Tution fee",
          totalReceivable: 65000,
          collectedAmount: 65000,
          outstanding: 0,
          status: "Paid",
        },
        {
          feeHead: "Alumni Fund",
          totalReceivable: 1000,
          collectedAmount: 1000,
          outstanding: 23,
          status: "Paid",
        },
      ],
      others: [
        {
          feeHead: "Re-Valuation Fee",
          totalReceivable: 65000,
          collectedAmount: 65000,
          outstanding: 0,
          status: "Paid",
        },
        {
          feeHead: "End Semester Exam Fee",
          totalReceivable: 6400,
          collectedAmount: 6400,
          outstanding: 0,
          status: "Paid",
        },
      ],
      transactions: [
        {
          date: '20/3/2024',
          voucher_no: "OFR2324032100300",
          total_amount: 350.00,
          payment_mode: "online",
        },
        {
          date: '19/03/2024',
          voucher_no: "OFR2324031901155",
          total_amount: 3250.00,
          payment_mode: "online",
        },
      ],
      onlinePayments: [
        {
          date: '11/12/2024',
          order_id: "984fe8e2-99b4-4c4b-b7de-8df036b13a25",
          fee_type: "Academic",
          status: "cancelled",
          fee_heads: "Tution fee",
          amount: "30175.00",
          txn_id: "48629503-5f93-4a60-83c7-38401733f6fc",
          remark: "User cancelled the UPI transaction",
        },
        {
          date: '13/04/2024',
          order_id: "984fe8e2-99b4-4c4b-b7de-8df036b13a25",
          fee_type: "Academic",
          status: "cancelled",
          fee_heads: "Tution fee",
          amount: "30175.00",
          txn_id: "48629503-5f93-4a60-83c7-38401733f6fc",
          remark: "User cancelled the UPI transaction",
        }
      ],
    },
    "2023-2024": {
      academic: [
        {
          feeHead: "Tution fee",
          totalReceivable: 65000,
          collectedAmount: 65000,
          outstanding: 0,
          status: "Paid",
        },
        {
          feeHead: "Alumni Fund",
          totalReceivable: 1000,
          collectedAmount: 1000,
          outstanding: 2,
          status: "Paid",
        },
      ],
      others: [
        {
          feeHead: "Re-Valuation Fee",
          totalReceivable: 65000,
          collectedAmount: 65000,
          outstanding: 0,
          status: "Paid",
        },
        {
          feeHead: "End Semester Exam Fee",
          totalReceivable: 6400,
          collectedAmount: 6400,
          outstanding: 0,
          status: "Paid",
        },
      ],
      transactions: [
        {
          date: '20/3/2024',
          voucher_no: "OFR2324032100300",
          total_amount: 350.00,
          payment_mode: "online",
        },
        {
          date: '19/03/2024',
          voucher_no: "OFR2324031901155",
          total_amount: 3250.00,
          payment_mode: "online",
        },
      ],
      onlinePayments: [
        {
          date: '11/12/2024',
          order_id: "984fe8e2-99b4-4c4b-b7de-8df036b13a25",
          fee_type: "Academic",
          status: "cancelled",
          fee_heads: "Tution fee",
          amount: "30175.00",
          txn_id: "48629503-5f93-4a60-83c7-38401733f6fc",
          remark: "User cancelled the UPI transaction",
        },
        {
          date: '13/04/2024',
          order_id: "984fe8e2-99b4-4c4b-b7de-8df036b13a25",
          fee_type: "Academic",
          status: "cancelled",
          fee_heads: "Tution fee",
          amount: "30175.00",
          txn_id: "48629503-5f93-4a60-83c7-38401733f6fc",
          remark: "User cancelled the UPI transaction",
        }
      ],
    },
  },
};

export default function StudentFeeDetails() {
  const [tabValue, setTabValue] = useState({});
  const [expandedYears, setExpandedYears] = useState({});

  const handleExpandToggle = (year) => {
    setExpandedYears((prev) => {
      const newExpanded = { ...prev, [year]: !prev[year] };
      if (newExpanded[year] && tabValue[year] === undefined) {
        // Set default tab to 0 when expanding for the first time
        setTabValue((prevTab) => ({ ...prevTab, [year]: 0 }));
      }
      return newExpanded;
    });
  };


  const handleTabChange = (year, newValue) => {
    setTabValue((prev) => ({ ...prev, [year]: newValue }));
  };

  const renderTable = (items, includeTotals = false) => {
    let totalReceivable = 0, collectedAmount = 0, outstanding = 0;

    return (
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sr. No.</TableCell>
              <TableCell>Fee Head</TableCell>
              <TableCell>Total Receivable</TableCell>
              <TableCell>Collected Amount</TableCell>
              <TableCell>Outstanding</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, idx) => {
              totalReceivable += item.totalReceivable || 0;
              collectedAmount += item.collectedAmount || 0;
              outstanding += item.outstanding || 0;
              return (
                <TableRow key={idx}>
                  <TableCell>{idx + 1}</TableCell>
                  <TableCell>{item.feeHead}</TableCell>
                  <TableCell>{item.totalReceivable}</TableCell>
                  <TableCell>{item.collectedAmount}</TableCell>
                  <TableCell>{item.outstanding}</TableCell>
                  <TableCell>{item.status}</TableCell>
                </TableRow>
              );
            })}
            {includeTotals && (
              <>
                <TableRow>
                  <TableCell colSpan={2}><strong>Total</strong></TableCell>
                  <TableCell><strong>{totalReceivable}</strong></TableCell>
                  <TableCell><strong>{collectedAmount}</strong></TableCell>
                  <TableCell><strong>{outstanding}</strong></TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}><strong>Scholarship Amount</strong></TableCell>
                  <TableCell><strong>{data.studentInfo.scholarshipAmount}</strong></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}><strong>Grand Total</strong></TableCell>
                  <TableCell><strong>{totalReceivable + data.studentInfo.scholarshipAmount}</strong></TableCell>
                </TableRow>
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  const renderTransactions = (transactions) => (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Voucher No</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Payment Mode</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((item, idx) => (
            <TableRow key={idx}>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.voucher_no}</TableCell>
              <TableCell>{item.total_amount}</TableCell>
              <TableCell>{item.payment_mode}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  const renderOnlinePayments = (payments) => (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Order ID</TableCell>
            <TableCell>Fee Type</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Fee Head</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Transaction ID</TableCell>
            <TableCell>Remark</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {payments.map((item, idx) => (
            <TableRow key={idx}>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.order_id}</TableCell>
              <TableCell>{item.fee_type}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>{item.fee_heads}</TableCell>
              <TableCell>{item.amount}</TableCell>
              <TableCell>{item.txn_id}</TableCell>
              <TableCell>{item.remark}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <Box p={2}>
      <Typography variant="h5" gutterBottom sx={{ fontFamily: 'Lobster, sans-serif', color: '#18a1d9' }}>
        Student Fee Details
      </Typography>
      <Card variant="outlined">
        <CardContent>
          <Grid container spacing={5} sx={{ justifyContent: 'space-between' }}>
            <Grid item xs={12} sm={4}>
              <table>
                <tbody>
                  <tr><td><strong>Name</strong></td><td>: {data.studentInfo.name}</td></tr>
                  <tr><td><strong>Reg No</strong></td> <td>: {data.studentInfo.regNumber}</td></tr>
                  <tr><td><strong>Batch</strong></td> <td>: {data.studentInfo.batch}</td></tr>
                </tbody>
              </table>
            </Grid>
            <Grid item xs={12} sm={4}>
              <table>
                <tbody>
                  <tr><td><strong>Stream</strong></td><td>: {data.studentInfo.stream}</td></tr>
                  <tr><td><strong>Section</strong></td><td>: {data.studentInfo.section}</td></tr>
                  <tr><td><strong>Roll No</strong></td><td>: {data.studentInfo.rollNumber}</td></tr>
                </tbody>
              </table>
            </Grid>

            <Grid item xs={12} sm={4}>
              <table>
                <tbody>
                  <tr><td><strong>Session</strong></td><td>: {data.studentInfo.session}</td></tr>
                  <tr><td><strong>Total Components</strong></td><td>: {data.studentInfo.totalComponent}</td></tr>
                </tbody>
              </table>
            </Grid>
          </Grid>
        </CardContent>
      </Card >

      {
        Object.entries(data.feeDetails).map(([year, details]) => {
          const isExpanded = expandedYears[year] || false;
          return (
            <Card key={year} sx={{ mt: 2 }}>
              <CardActions
                sx={{
                  background: "#f0f0f0",
                  justifyContent: "space-between",
                  cursor: "pointer",
                }}
                onClick={() => handleExpandToggle(year)}
              >
                <Typography fontWeight="bold">{year}</Typography>
                <ExpandMore
                  expand={isExpanded ? 1 : 0}
                  onClick={(e) => {
                    e.stopPropagation(); // prevent double toggle
                    handleExpandToggle(year);
                  }}
                  aria-expanded={isExpanded}
                  aria-label={`expand ${year}`}
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Tabs
                    value={tabValue[year] ?? 0}
                    onChange={(e, newVal) => handleTabChange(year, newVal)}
                    variant="scrollable"
                  >
                    <Tab label="Academic" />
                    <Tab label="Others" />
                    <Tab label="Transaction History" />
                    <Tab label="Online Payment History" />
                  </Tabs>
                  {tabValue[year] === 0 && renderTable(details.academic, true)}
                  {tabValue[year] === 1 && renderTable(details.others)}
                  {tabValue[year] === 2 && renderTransactions(details.transactions)}
                  {tabValue[year] === 3 && renderOnlinePayments(details.onlinePayments)}
                </CardContent>
              </Collapse>
            </Card>
          );
        })
      }
    </Box >
  );
}
