class ProjectController {
  async store(req, res) {
    const { id, title } = req.body;
    return res.json({ data: req.body });
  }

  async index(req, res) {
    return res.json({ message: 'Project List' });
  }
}

export default new ProjectController();
