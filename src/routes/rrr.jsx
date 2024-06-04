import { Link } from "react-router-dom";

function rrr() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/dashboard" className="hover:bg-indigo-700 p-2 rounded">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/budgets" className="hover:bg-indigo-700 p-2 rounded">
            Tenders
          </Link>
        </li>
        <li>
          <Link to="/employees" className="hover:bg-indigo-700 p-2 rounded">
            Employees
          </Link>
        </li>
        <li>
          <Link to="/invoice" className="hover:bg-indigo-700 p-2 rounded">
            Invoice
          </Link>
        </li>
        <li>
          <Link to="/reports" className="hover:bg-indigo-700 p-2 rounded">
            Reports
          </Link>
        </li>
        <li>
          <Link to="/calendar" className="hover:bg-indigo-700 p-2 rounded">
            Calendar
          </Link>
        </li>
        <li>
          <Link to="/documents" className="hover:bg-indigo-700 p-2 rounded">
            Documents
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default rrr;
