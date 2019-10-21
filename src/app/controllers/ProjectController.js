class ProjectController {
  async store(req, res) {
    const { id, title } = req.body;
    return res.json({ data: req.body });
  }
}

export default new ProjectController();
