import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from '../components/layout/Layout'
import Main from '../features/main/Main'
import Entities from '../features/pageEntities/Entities'
import SettingsMain from '../features/pageSettings/SettingsMain'
import CreateRulesPage from '../features/CreateRules/CreateRulesPage'
import Accounts from '../features/pageAccounts/Accounts'
import Project from '../features/pageProject/Project'
import PageProjectId from '../features/pageProject/pageProjectId/PageProjectId'
import PageOperations from '../features/pageOperations/PageOperations'
import PageSales from '../features/pageSales/Sales'
import PageCounterparty from '../features/pageCounterparty/PageCounterparty'
import PageReports from '../features/pageReportsDDS/PageReports'
import PageReportsOPU from '../features/pageReportsOPU/PageReportsOPU'
import IndicatorsMainPage from '../features/indicators/indicatorsMainPage'
import MainAccItems from '../features/contractors/mainContractors'
import PageSaleId from '../features/pageSale/pageSaleId/PageSaleId'
import PagePurchaseId from '../features/pageSale/pagePurchaseId/PagePurchaseId'
import Purchase from '../features/pagePurchase/Purchase'
import Bill from '../features/pageBill/Bill'
import PagePaymentCalendar from '../features/pagePaymentCalendar/PagePaymentCalendar'
import PageBDR from '../features/pageBDR/PageBDR'
import PageBDRId from '../features/pageBDR/pageBDRId/PageBDRId'
// import MainContractors from '../features/contractors/mainContractors/MainContractors'

function App() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path='/' element={<Main />} />
				<Route path='/entities' element={<Entities />} />
				<Route path='/settings' element={<SettingsMain />} />
				<Route path='/settings/create-rules' element={<CreateRulesPage />} />
				<Route path='/accounts' element={<Accounts />} />
				<Route path='/project' element={<Project />} />
				<Route path='/project/:id' element={<PageProjectId />} />
				<Route path='/operations' element={<PageOperations />} />
				<Route path='/sales' element={<PageSales />} />
				<Route path='/sale/:id' element={<PageSaleId />} />
				<Route path='/purchase' element={<Purchase />} />
				<Route path='/purchase/:id' element={<PagePurchaseId />} />
				<Route path='/bill' element={<Bill />} />
				<Route path='/counterparty' element={<PageCounterparty />} />
				<Route path='/payment-calendar' element={<PagePaymentCalendar />} />
				<Route path='/budget-income-expenses' element={<PageBDR />} />
				<Route path='/budget-income-expenses/:id' element={<PageBDRId />} />
				<Route path='/reports' element={<PageReports />} />
				<Route path='/reports-opu' element={<PageReportsOPU />} />
				<Route path='/indicators' element={<IndicatorsMainPage />} />
				<Route path='/accounting-items' element={<MainAccItems />} />
			</Route>
		</Routes>
	)
}

export default App
