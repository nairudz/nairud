import { useState } from 'react';
import './App.css';

function App() {
  const [catName, setCatName] = useState('');
  const [catDesc, setCatDesc] = useState('');
  const [work, setWork] = useState('');
  const [incomeRange, setIncomeRange] = useState('');
  const [categories, setCategories] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleAddCategory = () => {
    const trimmedName = catName.trim();
    const trimmedDesc = catDesc.trim();
    const trimmedWork = work.trim();
    const trimmedIncome = incomeRange.trim();

    // Guard Clause Validation
    if (!trimmedName || !trimmedDesc || !trimmedWork || !trimmedIncome) {
      alert("Please complete all input fields, including work and income range.");
      return;
    }

    // Format Name
    let formattedName = trimmedName.toUpperCase();
    if (formattedName.length > 25) {
      formattedName = formattedName.slice(0, 25) + "...";
    }

    // Format Description
    let formattedDesc = trimmedDesc;
    if (formattedDesc.length > 25) {
      formattedDesc = formattedDesc.slice(0, 25) + "...";
    }

    // Format Work
    let formattedWork = trimmedWork;
    if (formattedWork.length > 25) {
      formattedWork = formattedWork.slice(0, 25) + "...";
    }

    // Format Income Range with Peso symbol if not included
    let formattedIncome = trimmedIncome;
    if (!formattedIncome.includes('₱') && !formattedIncome.toLowerCase().includes('php')) {
      formattedIncome = `₱${formattedIncome}`;
    }

    // Append new category to state
    setCategories([
      ...categories,
      {
        name: formattedName,
        desc: formattedDesc,
        work: formattedWork,
        range: formattedIncome,
      },
    ]);

    // Trigger Success message
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);

    // Reset inputs
    setCatName('');
    setCatDesc('');
    setWork('');
    setIncomeRange('');
  };

  return (
    <div className="bg-light py-5 min-vh-100">
      <main className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">

            {/* Success Alert Banner */}
            {showSuccess && (
              <div className="alert alert-success alert-dismissible fade show fw-bold text-center mb-4 shadow-sm" role="alert">
                🎉 Success! Added work and income category successfully!
              </div>
            )}

            {/* Registration Card */}
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-header bg-success text-white py-3">
                <h1 className="h5 mb-0 fw-bold">Income Category Registration</h1>
              </div>
              <div className="card-body p-4">
                <form onSubmit={(e) => e.preventDefault()}>
                  
                  {/* Category Name */}
                  <div className="mb-3">
                    <label htmlFor="txtCatName" className="form-label fw-semibold">
                      Category Name
                    </label>
                    <input
                      type="text"
                      id="txtCatName"
                      className={`form-control ${catName.trim() ? 'is-valid-green' : ''}`}
                      placeholder="e.g., Consulting"
                      value={catName}
                      onChange={(e) => setCatName(e.target.value)}
                    />
                  </div>

                  {/* Description */}
                  <div className="mb-3">
                    <label htmlFor="txtCatDesc" className="form-label fw-semibold">
                      Description
                    </label>
                    <input
                      type="text"
                      id="txtCatDesc"
                      className={`form-control ${catDesc.trim() ? 'is-valid-green' : ''}`}
                      placeholder="e.g., Enterprise technical support contract"
                      value={catDesc}
                      onChange={(e) => setCatDesc(e.target.value)}
                    />
                  </div>

                  {/* Work / Occupation */}
                  <div className="mb-3">
                    <label htmlFor="txtWork" className="form-label fw-semibold">
                      Work / Occupation
                    </label>
                    <input
                      type="text"
                      id="txtWork"
                      className={`form-control ${work.trim() ? 'is-valid-green' : ''}`}
                      placeholder="e.g., Software Engineer, Freelancer"
                      value={work}
                      onChange={(e) => setWork(e.target.value)}
                    />
                  </div>

                  {/* Income Range */}
                  <div className="mb-3">
                    <label htmlFor="txtIncomeRange" className="form-label fw-semibold">
                      Income Range (₱)
                    </label>
                    <input
                      type="text"
                      id="txtIncomeRange"
                      className={`form-control ${incomeRange.trim() ? 'is-valid-green' : ''}`}
                      placeholder="e.g., ₱10,000 - ₱25,000"
                      value={incomeRange}
                      onChange={(e) => setIncomeRange(e.target.value)}
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleAddCategory}
                    className="btn btn-success px-4 fw-semibold"
                  >
                    Save Category
                  </button>
                </form>
              </div>
            </div>

            {/* Ledger Table Card */}
            <div className="card shadow-sm border-0">
              <div className="card-header bg-white py-3">
                <h2 className="h6 mb-0 text-secondary fw-bold text-uppercase">
                  Registered Categories
                </h2>
              </div>
              <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th scope="col" className="w-25">Category Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Work</th>
                      <th scope="col">Income Range</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.length === 0 ? (
                      <tr>
                        <td colSpan="4" className="text-center text-muted py-4">
                          No categories registered yet.
                        </td>
                      </tr>
                    ) : (
                      categories.map((item, index) => (
                        <tr key={index}>
                          <td className="fw-semibold text-dark">{item.name}</td>
                          <td className="text-secondary">{item.desc}</td>
                          <td className="text-secondary">{item.work}</td>
                          <td className="text-success fw-bold">{item.range}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;