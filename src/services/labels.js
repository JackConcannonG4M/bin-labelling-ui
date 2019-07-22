export const getLabels = async () => (
    [
        {id: 1, binNumber: "L4-S2-C2-B80", colour: "white", template: "tote-l", location: "standard"},
        {id: 2, binNumber: "L10-S5-C7-B19", colour: "blue", template: "range", location: "high"},
        {id: 3, binNumber: "L11-S8-C10-B12", colour: "red", template: "tote-s", location: "high"},
    ]
);

export const getLabel = async (labelId) => {
    labelId = Number(labelId);
    let labels = await getLabels();
    return labels.find(o => o.id === labelId);
};
