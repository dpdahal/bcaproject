function AdminAsideComponents() {
    return (
        <div>
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <a className="nav-link " href="index.html">
                            <i className="bi bi-grid" />
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-menu-button-wide" /><span>Components</span><i className="bi bi-chevron-down ms-auto" />
                        </a>
                        <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="components-alerts.html">
                                    <i className="bi bi-circle" /><span>Alerts</span>
                                </a>
                            </li>
                            <li>
                                <a href="components-accordion.html">
                                    <i className="bi bi-circle" /><span>Accordion</span>
                                </a>
                            </li>
                            <li>
                                <a href="components-badges.html">
                                    <i className="bi bi-circle" /><span>Badges</span>
                                </a>
                            </li>
                            <li>
                                <a href="components-breadcrumbs.html">
                                    <i className="bi bi-circle" /><span>Breadcrumbs</span>
                                </a>
                            </li>
                            <li>
                                <a href="components-buttons.html">
                                    <i className="bi bi-circle" /><span>Buttons</span>
                                </a>
                            </li>
                            <li>
                                <a href="components-cards.html">
                                    <i className="bi bi-circle" /><span>Cards</span>
                                </a>
                            </li>
                            <li>
                                <a href="components-carousel.html">
                                    <i className="bi bi-circle" /><span>Carousel</span>
                                </a>
                            </li>
                            <li>
                                <a href="components-list-group.html">
                                    <i className="bi bi-circle" /><span>List group</span>
                                </a>
                            </li>
                            <li>
                                <a href="components-modal.html">
                                    <i className="bi bi-circle" /><span>Modal</span>
                                </a>
                            </li>
                            <li>
                                <a href="components-tabs.html">
                                    <i className="bi bi-circle" /><span>Tabs</span>
                                </a>
                            </li>
                            <li>
                                <a href="components-pagination.html">
                                    <i className="bi bi-circle" /><span>Pagination</span>
                                </a>
                            </li>
                            <li>
                                <a href="components-progress.html">
                                    <i className="bi bi-circle" /><span>Progress</span>
                                </a>
                            </li>
                            <li>
                                <a href="components-spinners.html">
                                    <i className="bi bi-circle" /><span>Spinners</span>
                                </a>
                            </li>
                            <li>
                                <a href="components-tooltips.html">
                                    <i className="bi bi-circle" /><span>Tooltips</span>
                                </a>
                            </li>
                        </ul>
                    </li>

                </ul>
            </aside>
        </div>
    )
}

export default AdminAsideComponents;