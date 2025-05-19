import Header from '../components/Header';
import FinancialOverviewCards from '../components/FinancialOverviewCards';
import ExpenseIncomeChart from '../components/ExpenseIncomeChart';
import CategoryPieChart from '../components/CategoryPieChart';
import TransactionsTable from '../components/TransactionsTable';
import NotificationsTips from '../components/NotificationsTips';
import CalendarTracker from '../components/CalendarTracker';
import BudgetingAssistant from '../components/BudgetingAssistant';

export default function Dashboard() {
  return (
    <>
      <Header />
      <FinancialOverviewCards />
      <ExpenseIncomeChart />
      <CategoryPieChart />
      <BudgetingAssistant />
      <TransactionsTable />
      <CalendarTracker />
      <NotificationsTips />
    </>
  );
}
